import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Path } from "../../constants/appConstants/appConstants";
import { ref, onValue } from "firebase/database";
import { db } from "../../lib/firebaseStore/firebase";

const QrCodeView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<string>();

  useEffect(() => {
    const qrRef = ref(db, "qrData");

    const unsub = onValue(qrRef, (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsub();
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-10">
        <p>Đang tải dữ liệu...</p>
        <Button className="mt-4" onClick={() => navigate(`/${Path.qrcode}`)}>
          Quay lại
        </Button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-10">
        <p>Chưa có QR nào được tạo!</p>
        <Button className="mt-4" onClick={() => navigate(`/${Path.qrcode}`)}>
          Quay lại
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">QR Code</h1>
      <img
        src={data}
        alt="QR Code"
        className="mx-auto border rounded-xl shadow-md"
      />
    </div>
  );
};

export default QrCodeView;
