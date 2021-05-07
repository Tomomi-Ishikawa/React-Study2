import "./styles.css";
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  //　アロー関数によって毎回新しい関数を生成しているため、再レンダリングが生じる
  // =>　防ぐためには　useCallback　関数を使用する  配列[open]　の値が変わったときに実行される
  // const onClickClose = () => setOpen(false);
  const onClickClose = useCallback(() => setOpen(false), [open]);

  // 変数自体のmemo化 useMemo
  // 最初に読み込めれたときだけ処理する関数
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
