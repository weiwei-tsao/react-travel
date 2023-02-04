react-router 如何传递路由信息

v6 版本中全面使用函数式组件

- useLocation() - 路由状态获取
- useNavigate() - 路由间的调整
- useParams() - 获取录音参数

  ```typescript
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
  ```

- <Link /> 组件代替a标签

```typescript
const Link: React.FC<LinkProps> = ({ children, to }) => {
  const history = useHistory();

  return (
    <a
      href={to}
      coClick={() => {
        history.push(to);
      }}
    >
      {children}
    </a>
  );
};
```
