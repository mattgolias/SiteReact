import { Order } from "../../types/Orders";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    "_id": "6372e48cbcd195b0d30f7f3",
    "table": "5",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Pizza quatro queijos",
          "price": 40,
        },
        "quantity": 3,
        "_id": "6372e48cbcd195b0d30f7f4"
      },
      {
        "product": {
          "name": "Coca cola",
          "price": 7,
        },
        "quantity": 2,
        "_id": "6372e48cbcd195b0d30f7f5"
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
