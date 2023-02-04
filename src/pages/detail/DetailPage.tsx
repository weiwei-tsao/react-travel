import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useParams } from 'react-router-dom';

// type 和 interface 大部分情况下可以通用
// 但是 type 可以再次定义类型，interface 定义的是对象的类型，如果一定要使用interface 可以加上 keyof
type MatchParams = {
  touristRouteId: string;
  other: string;
};

// interface MatchParams2 {
// 	touristRouteId : string,
// 	other : string
// }

// type str = "str";
// interface str2 = "str";

export const DetailPage: React.FC = () => {
  // var params = useParams<"touristRouteId">();
  var params = useParams<MatchParams>();
  // var params = useParams<keyof MatchParams2>();
  return (
    <h1>
      旅游路线详情页, 路线id: {params.touristRouteId} {params.other}
    </h1>
  );
};
