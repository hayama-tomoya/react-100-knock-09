
import { Memo } from "../type";

type MemoContentProps = {
  memo: Memo | undefined;
  onEditMemo: (id: number, newContent: string) => void;
  onEditMemoTitle: (id: number, newText: string) => void;
  // onEditMemoContent: (id: number, newContent: string) => void;
  onChangeContentStyle: (id: number, newStyle: Partial<Memo['contentStyle']>) => void;
  onTextSelection: (id: number) => void;
};

export const MemoContent = ({ memo, onEditMemo, onEditMemoTitle, onChangeContentStyle, onTextSelection}: MemoContentProps) => {
  if (!memo) {
    return (
      <div className="memoContentUndifined">
        メモを選択してください
      </div>
    );
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onEditMemo(memo.id, e.target.value);
  }

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeContentStyle(memo.id, { fontSize: e.target.value });
  };

  const handleFontWeightChange = () => {
    onChangeContentStyle(memo.id, {
      fontWeight: memo.contentStyle.fontWeight === 'bold' ? 'normal' : 'bold',
    });
  };

  const handleTextAlignChange = (align: 'left' | 'center' | 'right') => {
    onChangeContentStyle(memo.id, { textAlign: align });
  };

  const fontSizeOptions = [];
  for (let i = 8; i <= 40; i += 8) {
    fontSizeOptions.push(
      <option key={i} value={`${i}px`}>
        {i}px
      </option>
    );
  }

  const handleTextSelect = (e: React.MouseEvent) => {
    if (e.button === 0) {
      onTextSelection(memo.id); 
    }
  };


  return (
    <div className="memoContent">
      <input
        className="memoTitle"
        value={memo.text}
        onChange={(e) => onEditMemoTitle(memo.id, e.target.value)}
      />
      <div className="memoHeader">
        <div className="memoHeaderControls">
          <button onClick={handleFontWeightChange} style={{ fontWeight: memo.contentStyle.fontWeight === 'bold' ? 'bold' : 'normal' }}>
            B
          </button>
          <button onClick={() => handleTextAlignChange('left')}>⬅️</button>
          <button onClick={() => handleTextAlignChange('center')}>↔️</button>
          <button onClick={() => handleTextAlignChange('right')}>➡️</button>
          <select
            value={memo.contentStyle.fontSize}
            onChange={handleFontSizeChange}
          >
            {fontSizeOptions}
          </select>
        </div>
      </div>
      <textarea
        value={memo.content}
        onChange={onChangeText}
        className="memoText"
        style={{
          fontWeight: memo.contentStyle.fontWeight,
          fontSize: memo.contentStyle.fontSize,
          textAlign: memo.contentStyle.textAlign,
        }}
        onMouseUp={handleTextSelect}
      />
    </div>
  );
};