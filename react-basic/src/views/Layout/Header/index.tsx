import React from 'react'

interface Props {
  count: number;
}

// 구조 분해 할당 예시
// let { name, age } = object1; // { name: '홍길동'. age: 30, address: '부산' }
// console.log(name);
// console.log(age);
export default function Header({ count }: Props) {  // 구조 분해 할당

  return (
    <div>Header : { count }</div>
  )
}
