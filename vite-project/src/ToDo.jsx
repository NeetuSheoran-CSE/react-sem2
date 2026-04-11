function ToDo(){

    function callFun(){
        alert("function called")
    }
    return(
        <div>
            <h1>My Todos</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="todo" width="200px"
                 
                 class="photo"
                 />
                 <ul>
                    <li>invent new traffic lights</li>
                    <li>rehearse a movie scene</li>
                    <li>improve the specyrum technology</li>
                 </ul>
                 <button onClick={callFun}>Click me</button>
        </div>
    )
} 