export interface SchoolAddress {
  street: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
}

export interface SchoolContactItem {
  value: string;
  display?: string;
}

export interface SchoolInfo {
  name: string;
  shortName: string;
  domain: string;
  address: SchoolAddress;
  mapsUrl: string;
  phone: SchoolContactItem;
  phoneAlt: SchoolContactItem;
  email: SchoolContactItem;
  whatsapp: {
    value: string;
    display: string;
  };
  session: string;
  academicLevels: string[];
}
