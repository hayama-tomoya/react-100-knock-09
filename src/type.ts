
export type Memo = {
  id: number;
  text: string;
  content: string;
  headerStyle: {
    fontWeight: 'normal' | 'bold';
    fontSize: string;
    textAlign: 'left' | 'center' | 'right';
  };
};
