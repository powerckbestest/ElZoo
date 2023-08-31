import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export default function Tariffs() {
  return (
    <div>Tariffs</div>
  )
}

// export default function Tariffs({ user }) {
//   const [prices, setPrices] = useState({
//     weekend: {
//       normal: '',
//       child: '',
//     },
//     weekday: {
//       normal: '',
//       child: '',
//     },
//   });

//   const handleInputChange = (event, day, type) => {
//     const { value } = event.target;
//     setPrices((prevPrices) => ({
//       ...prevPrices,
//       [day]: {
//         ...prevPrices[day],
//         [type]: value,
//       },
//     }));
//   };

//   const handleSave = () => {
//     // Ваш код для отправки данных на сервер
//     // Здесь может быть запрос к API, который сохранит данные в базе данных
//     console.log('Saving prices:', prices);
//   };

//   return (
//     <div>
//       <div>
//         <h2>Weekend price:</h2>
//         <div>Old</div>
//         <Form.Control
//           type="text"
//           placeholder="Normal text"
//           value={prices.weekend.normal}
//           onChange={(event) => handleInputChange(event, 'weekend', 'normal')}
//           readOnly={!user}
//         />
//         <br />
//         <div>Child</div>
//         <Form.Control
//           type="text"
//           placeholder="Normal text"
//           value={prices.weekend.child}
//           onChange={(event) => handleInputChange(event, 'weekend', 'child')}
//           readOnly={!user}
//         />
//       </div>
//       <div>
//         <h2>WeekDay price:</h2>
//         <div>Old</div>
//         <Form.Control
//           type="text"
//           placeholder="Normal text"
//           value={prices.weekday.normal}
//           onChange={(event) => handleInputChange(event, 'weekday', 'normal')}
//           readOnly={!user}
//         />
//         <br />
//         <div>Child</div>
//         <Form.Control
//           type="text"
//           placeholder="Normal text"
//           value={prices.weekday.child}
//           onChange={(event) => handleInputChange(event, 'weekday', 'child')}
//           readOnly={!user}
//         />
//       </div>
//       {user && (
//         <Button onClick={handleSave} disabled={!user}>
//           Save
//         </Button>
//       )}
//     </div>
//   );
// }
