// memo
import { memo } from "react";

// style
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//　memoを用いて props　が更新されない限り　再レンダリングしないようにする
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");
  const data = [...Array(2000).keys()];
  // ループ処理
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
