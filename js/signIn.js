// signIn.htmlが開かれたときに実行する関数
function displaySignIn() {
    // ユーザ名をサインインのフォームに自動入力
    const formUserName = document.getElementById("userNameSignIn");
    formUserName.value = userNameLocal;
    // 秘密の暗号をサインインのフォームに自動入力
    const formPassword = document.getElementById("passwordSignIn");
    formPassword.value = passwordLocal;
}

// サインインボタンが押された時の関数
async function signIn() {
    // ユーザ名を取得
    const userName = document.getElementById('userNameSignIn').value;
    const password = document.getElementById('passwordSignIn').value;

    setElem("infoSignIn", "サインイン中...");

    // サインインボタンを非活性化する
    elemDisabled("buttonSignIn", true);

    // フォームにユーザ名と秘密の暗号が正しく入力されているかチェック
    const checkBool = checkForm("infoSignIn", userName, password);
    if (checkBool) {
        // POSTのbody
        let formData = new FormData();
        formData.set('action', "signIn");
        formData.set('userName', userName);
        formData.set('password', password);

        // ユーザ名とパスワードを照合する、POST
        await fetch(urlApi, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // サインインできるか確認
            if (data.result) {
                // ローカルストレージにユーザ名、秘密の暗号を登録
                localStorage.setItem('userName', userName);
                localStorage.setItem('password', password);
                window.location.href = './index.html';
            } else {
                setElem("infoSignIn", data.message);
            }
        })
        .catch(error => {
            setElem("infoSignIn", "サインインエラー\n" + error);
        });
    }
    // サインインボタンを活性化する
    elemDisabled("buttonSignIn", false);
}

// サインアップボタンが押された時の関数
async function signUp() {
    // ユーザ名、秘密の暗号を取得
    const userName = document.getElementById('userNameSignUp').value;
    const password = document.getElementById('passwordSignUp').value;

    setElem("infoSignUp", "新規登録中...");

    // 新規登録ボタンを非活性化する
    elemDisabled("buttonSignUp", true);

    // フォームにユーザ名と秘密の暗号が正しく入力されているかチェック
    const checkBool = checkForm("infoSignUp", userName, password);
    if (checkBool) {
        // POSTのbody
        let formData = new FormData();
        formData.set('action', "signUp");
        formData.set('userName', userName);
        formData.set('password', password);

        // ユーザ名とパスワードを登録、POST
        await fetch(urlApi, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.result) {
                // ローカルストレージにユーザ名、秘密の暗号を登録
                localStorage.setItem('userName', userName);
                localStorage.setItem('password', password);
                setElem("infoSignUp", data.message);
            } else {
                setElem("infoSignUp", data.message);
            }
        })
        .catch(error => {
            setElem("infoSignUp", "新規登録エラー\n" + error);
        });
    }
    // 新規登録ボタンを活性化する
    elemDisabled("buttonSignUp", false);
}



// フォームにユーザ名と秘密の暗号が正しく入力されているかチェックする関数
function checkForm(infoId, userName, password) {
    if (!userName.match(/^[a-zA-Z]{1,12}$/)) {
        setElem(infoId, "ユーザ名は、半角英字１～１２文字です。");
        return false;
    } else if (!password.match(/^[a-zA-Z]{3}$/)) {
        setElem(infoId, "秘密の暗号は、半角英字３文字です。");
        return false;
    } else {
        return true;
    }
}



displaySignIn();