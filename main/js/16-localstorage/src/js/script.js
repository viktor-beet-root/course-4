const date = new Date(Date.now() + 10000);
console.log(date.toUTCString());
document.cookie = 'user1=Petya';
//document.cookie = 'user=Viktor';
//document.cookie = 'user=Viktor; path=/; domain=localhost; expires=' + date.toUTCString();
//document.cookie = 'user=Viktor; max-age=10';
//console.log(document.cookie)

function getCookie(nameCookie) {
    if (!nameCookie) return '';

    const cookieList = document.cookie.split('; ').map(item => item.split('='));
    const cookie = Object.fromEntries(cookieList)[nameCookie];

    return cookie ? decodeURIComponent(cookie) : '';

    // const findCookie = cookieList.find(cookie => cookie[0] === nameCookie);
    // return findCookie ? findCookie[1] : '';
}

function removeCookie(nameCookie) {
    document.cookie = nameCookie + '=t; max-age=-1';
}

function setCookie(nameCookie, value, options) {
    let cookie = `${nameCookie}=${encodeURIComponent(value)}`;

    if (options) {
        for (let key in options) {
            let value = options[key];

            if (key === 'expire' && value instanceof Date) {
                value = value.toUTCString();
            }

            cookie = `${cookie}; ${key}=${value}`;
        }
    }

    document.cookie = cookie;
}

const counterElement = document.querySelector('.my-title > span');

const counterCookieName = 'counter';
const counterCookie = getCookie(counterCookieName);
let counter = 0;

if (counterCookie) {
    counter = +counterCookie + 1;
}

counterElement.textContent = counter;
setCookie(counterCookieName, counter);


// setCookie('user', 'Viktor', {
//     'max-age': 60,
//     path: '/',
// });
//removeCookie('user1');
//console.log(getCookie('user'));

localStorage.setItem('userMessages', JSON.stringify([{}]));
localStorage.removeItem('userMessages');
console.log(JSON.parse(localStorage.getItem('userMessages')));

const addForm = document.querySelector('.add-user');
const userListElement = document.querySelector('.user-list');

addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const user = Object.fromEntries(
        Array.from(
            new FormData(this)
        )
    );

    renderUser(user);
    addUserToLocalStorage(user);
});

function renderUser(user) {
    const template = `<li>
        User name: ${user['user-name']};
        email: <a href="mailto:${user.email}">${user.email}</a>
        age: ${user.age}
    </li>`

    userListElement.insertAdjacentHTML('afterbegin', template);
}

function addUserToLocalStorage(user) {
    let userList = JSON.parse(localStorage.getItem('userList'));
    userList = userList ? userList : [];

    if (userList && Array.isArray(userList)) {
        userList.push(user);
    }

    localStorage.setItem('userList', JSON.stringify(userList));
}

function getUser() {
    const userList = JSON.parse(localStorage.getItem('userList'));

    if (userList) {
        userList.forEach(user => {
            renderUser(user);
        });
    }
}

getUser();
