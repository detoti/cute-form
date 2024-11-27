let base_url = "https://viacep.com.br/ws";

const currentURL = base_url;

const servicesAPI = {
  viaCep: `${currentURL}`,
} as const;

export type ServiceType = keyof typeof servicesAPI;

export const servicesApi = <T extends ServiceType>(
  service: T
): (typeof servicesAPI)[T] => {
  return servicesAPI[service];
};
