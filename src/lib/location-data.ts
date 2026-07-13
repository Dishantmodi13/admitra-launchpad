import type { LocationOption } from "./location-data.types";

type CountryStateCity = typeof import("country-state-city");

let libPromise: Promise<CountryStateCity> | null = null;

function getLib() {
  libPromise ??= import("country-state-city");
  return libPromise;
}

export async function getCountryOptions(): Promise<LocationOption[]> {
  const { Country } = await getLib();
  return Country.getAllCountries()
    .map((country) => ({ value: country.isoCode, label: country.name }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export async function getStateOptions(countryCode: string): Promise<LocationOption[]> {
  const { Country, State } = await getLib();
  const states = State.getStatesOfCountry(countryCode);
  if (states.length === 0) {
    const country = Country.getCountryByCode(countryCode);
    return [{ value: countryCode, label: country?.name ?? countryCode }];
  }
  return states
    .map((state) => ({ value: state.isoCode, label: state.name }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export async function getCityOptions(
  countryCode: string,
  stateCode: string,
): Promise<LocationOption[]> {
  const { City } = await getLib();
  let cities = City.getCitiesOfState(countryCode, stateCode);
  if (cities.length === 0) {
    cities = City.getCitiesOfCountry(countryCode);
  }
  return cities
    .map((city, index) => ({
      value: `${city.name}|${index}`,
      label: city.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export async function getCountryLabel(code: string) {
  const { Country } = await getLib();
  return Country.getCountryByCode(code)?.name ?? code;
}

export async function getStateLabel(countryCode: string, stateCode: string) {
  const { Country, State } = await getLib();
  const state = State.getStateByCodeAndCountry(stateCode, countryCode);
  if (state) return state.name;
  return Country.getCountryByCode(countryCode)?.name ?? stateCode;
}

export type { LocationOption } from "./location-data.types";
