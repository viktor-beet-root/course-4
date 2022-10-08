import myAjax from "./myAjax";
import myAjaxPromis from "./myAxaxPromis";
import myFetch from "./myFetch";

// setTimeout(() => {
//     console.log(2);
// });

// for (var i = 0; i < 10; i++) {
//     s(i);
//     console.log(1);
// }

// function s(i) {
//     setTimeout(() => {
//         console.log(i);
//     });
// }
const url = 'https://jsonplaceholder.typicode.com/users';

const renderHtml = data => {
    const userList = document.querySelector('.user-list');

    data.forEach(user => {
        const template = `
        <li class="user-list__item">
            <strong>${user.id}. ${user.name}</strong>
        </li>`;
        userList.insertAdjacentHTML('beforebegin', template);
    });
}

myFetch(url).then((data) => {
    console.log(data);
});

// myFetch(url, {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'Viktor',
//         age: 18
//     }),
//     headers: {
//         'Content-type': 'application/json'
//     }
// }).then((data) => {
//     console.log(data);
// })

// myAjaxPromis({
//     url,
// }).then((data) => {
//     console.log(data);
// }).catch((data) => {
//     console.error(data);
// }).finally(() => {

// });

// myAjax(
//     {
//         url
//     },
//     renderHtml
// );
// myAjax({
//     url,
//     method: 'POST',
// }, (data) => {
//     console.log(data)
// }, {
//     name: 'Viktor',
//     age: 15,
// });

const d = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('sdfsdfsdfsdfdfssdf');
    }, 5000);
});


d.then((data) => {
    console.log(data);
})
