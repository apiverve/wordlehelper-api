declare module '@apiverve/wordlehelper' {
  export interface wordlehelperOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordlehelperResponse {
    status: string;
    error: string | null;
    data: WordleHelperData;
    code?: number;
  }


  interface WordleHelperData {
      matchCount:  number;
      suggestions: string[];
      filters:     Filters;
      pattern:     string;
  }
  
  interface Filters {
      green:  { [key: string]: string };
      yellow: string[];
      gray:   string[];
  }

  export default class wordlehelperWrapper {
    constructor(options: wordlehelperOptions);

    execute(callback: (error: any, data: wordlehelperResponse | null) => void): Promise<wordlehelperResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordlehelperResponse | null) => void): Promise<wordlehelperResponse>;
    execute(query?: Record<string, any>): Promise<wordlehelperResponse>;
  }
}
