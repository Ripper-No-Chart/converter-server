import dotenv from 'dotenv';

dotenv.config();

export const dolarBlueService = async (): Promise<number> => {
  try {
    const dolarApi: string = process.env.DOLAR_API?.toString() || '';
    const response: Response = await fetch(dolarApi);
    return await response.json().then((data: { venta: number }) => {
      return data.venta;
    });
  } catch (error) {
    throw new Error(`Failed to fetch Dolar Blue: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const mxnPesos = async (): Promise<number | undefined> => {
  try {
    const mxnWeb: string = process.env.MXN_WEB?.toString() || '';
    const response: Response = await fetch(mxnWeb);
    return await response.text().then((html: string) => {
      const regex: RegExp = /<span class=["']sty3["']>\$(\d+\.\d{2})<\/span>/;
      const value: RegExpMatchArray | null = html.match(regex);
      if (value && value[1]) return parseFloat(value[1]);
    });
  } catch (error) {
    throw new Error(`Failed to fetch Mexican Peso: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};
