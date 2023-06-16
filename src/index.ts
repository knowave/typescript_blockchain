import crypto from "crypto";

interface BlockShape {
  hash: string; // 해쉬 값 (해당 블록에 관한 고유값)
  prevHash: string; // 이전 해쉬값
  height: number; // 1,2,3,4,5 같이 블록의 위치를 표시해주는 숫자
  data: string; // 블록이 보호할 데이터
}

class Block implements BlockShape {
  public hash: string; // prebHash, height, data를 가지고 계산해서 hash값을 만들어야 하므로 변수로 만듬.
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
