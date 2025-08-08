export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  verifyUrl?: string;
  downloadUrl?: string;
  tags: string[];
};

export type Certificates = Certificate[];
