
export type Memo = {
  id: number;
  text: string;
  content: string;
  contentStyle: {
    fontWeight: 'normal' | 'bold';
    fontSize: string;
    textAlign: 'left' | 'center' | 'right';
  };
};