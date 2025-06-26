export type ProfileData = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  city: string;
  pincode: number | string;
  name: string;
  picture: string;
};

export type ProfileDataType = {
  formData: ProfileData;
  setFormData: React.Dispatch<React.SetStateAction<ProfileData>>;
};
