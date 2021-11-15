type btnList = {
  attribute: {
    type: string;
    id: string;
    onClick: (e: any) => void;
    disabled: boolean;
  };
  context: string;
};
export type { btnList };
