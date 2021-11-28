// https://stackoverflow.com/a/41308440/778329

// you can't use "enum" as a type, so use this.
type EnumType = { [s: string]: string };

export function mapEnum(enumerable: EnumType, fn: Function): any[] {
  // get all the members of the enum
  let enumMembers: any[] = Object.keys(enumerable).map((key) => enumerable[key]);

  // we are only interested in the numeric identifiers as these represent the values
  let enumValues: Array<string> = enumMembers.filter((v) => typeof v === 'string');

  // now map through the enum values
  return enumValues.map((m, i) => fn(m, i));
}

// https://stackoverflow.com/a/55699349/778329

export function randomEnum<T>(enumerable: T): T[keyof T] {
  const enumValues = Object.keys(enumerable) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}
