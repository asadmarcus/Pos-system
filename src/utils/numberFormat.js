export default function numberFormat(value) {
  const formatter = new Intl.NumberFormat("id");

  const formattedValue = `Rp ${formatter.format(value)}`;

  return formattedValue;
}
