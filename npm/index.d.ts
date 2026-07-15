declare module '@apiverve/wordlehelper' {
  export interface wordlehelperOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface wordlehelperResponse {
    status: string;
    error: string | null;
    data: WordleHelperData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WordleHelperData {
      matchCount:  number | null;
      suggestions: (null | string)[];
      filters:     Filters;
      pattern:     null | string;
  }
  
  interface Filters {
      green:  { [key: string]: null | string };
      yellow: (null | string)[];
      gray:   (null | string)[];
  }

  export default class wordlehelperWrapper {
    constructor(options: wordlehelperOptions);

    execute(callback: (error: any, data: wordlehelperResponse | null) => void): Promise<wordlehelperResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordlehelperResponse | null) => void): Promise<wordlehelperResponse>;
    execute(query?: Record<string, any>): Promise<wordlehelperResponse>;
  }
}
