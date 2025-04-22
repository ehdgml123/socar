const Test = () => {
  const authTestHandler = async () => {
    try {
        const token = sessionStorage.getItem('token');
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/test`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (res.ok) {
            const data = await res.json();
            console.log("Protected route response:", data);
        } else {
            const data = await res.json();
            alert(data.detail || "접근 권한이 없습니다.");
        }
    } catch (err) {
        console.error("오류 발생:", err);
        alert("오류 발생");
    }
};

  return (
    <div>
      <h1>Test Component</h1>
      <button onClick={authTestHandler}>로그인 여부 테스트</button>
    </div>
  )
}

export default Test;