import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import Selection, { type Option } from "../../components/ui/Selection";
import { useGetBankQuery } from "../../api/qrcode";
import { ref, set } from "firebase/database";
import { db } from "../../lib/firebaseStore/firebase";
import useToast from "../../components/ui/toast/Toast";

interface TransferInfo {
  customerCode: string;
  customerName: string;
  bank: string;
  accountNumber: string;
  amount?: string;
  addInfo: string;
}

const QrCodeSetting = () => {
  const [transferInfo, setTransferInfo] = useState<TransferInfo>({
    customerCode: "",
    customerName: "",
    bank: "",
    accountNumber: "",
    amount: undefined,
    addInfo: "",
  });

  const [bankOptions, setBankOptions] = useState<Option[]>([]);
  const getBankQuery = useGetBankQuery();
  const toast = useToast();

  useEffect(() => {
    const saved = getLocalStorageValues();

    if (Object.keys(saved).length > 0) {
      setTransferInfo((prev) => ({ ...prev, ...saved }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocalStorageValues = () => {
    const result: Partial<TransferInfo> = {};

    Object.keys(transferInfo).forEach((key) => {
      const value = localStorage.getItem(key);
      if (value) result[key as keyof TransferInfo] = value;
    });

    return result;
  };

  const localStorageSave = (
    info: Pick<TransferInfo, "customerName" | "accountNumber" | "bank">
  ) => {
    Object.entries(info).forEach(([key, value]) =>
      localStorage.setItem(key, value)
    );
  };

  const generateQR = () => {
    const { bank, accountNumber, amount, addInfo, customerName } = transferInfo;

    if (!bank || !accountNumber || !customerName) {
      toast.fire({
        icon: "error",
        title: "Vui lòng cập nhật đầy đủ thông tin tài khoản",
      });
      return undefined;
    }

    const qrUrl = `https://img.vietqr.io/image/${bank}-${accountNumber}-JH8r4kY.jpg?${
      amount && `amount=${amount}`
    }&addInfo=${encodeURIComponent(addInfo)}&accountName=${encodeURIComponent(
      customerName
    )}`;

    set(ref(db, "qrData"), qrUrl);

    localStorageSave({
      customerName,
      accountNumber,
      bank,
    });

    toast.fire({
      icon: "success",
      title: "Tạo QR thành công",
    });
  };

  useEffect(() => {
    setBankOptions(
      getBankQuery.data?.map((b) => ({
        label: `${b.shortName} (${b.code})`,
        value: b.bin,
      })) ?? []
    );
  }, [getBankQuery.data]);

  const updateField = (key: keyof TransferInfo, value: string) => {
    setTransferInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // UI fields
  const fields = [
    { label: "Số Tài Khoản*", key: "accountNumber", type: "text" },
    { label: "Tên Chủ Tài Khoản*", key: "customerName", type: "text" },
    { label: "Ngân Hàng*", key: "bank", type: "select" },
    { label: "Số Tiền", key: "amount", type: "text" },
    { label: "Nội Dung Chuyển", key: "addInfo", type: "text" },
  ] as const;

  return (
    <div className="p-6 max-w-xl mx-auto text-black">
      <div className="space-y-4 bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Cài đặt thông tin</h2>

        {fields.map((item) => (
          <div key={item.key}>
            <label className="font-semibold">{item.label}</label>

            {item.type === "select" ? (
              <Selection
                label=""
                value={transferInfo.bank}
                setter={(v) => updateField("bank", v)}
                options={bankOptions}
              />
            ) : (
              <input
                value={transferInfo[item.key]}
                onChange={(e) => updateField(item.key, e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            )}
          </div>
        ))}

        <Button onClick={generateQR} className="w-full mt-4 py-2 rounded-lg">
          Tạo QR
        </Button>
      </div>
    </div>
  );
};

export default QrCodeSetting;
