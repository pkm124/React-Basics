function Student(props)
{
    console.warn(props)
    return(
        <div>
            <h1>Student {props.name}</h1>
            <h1>Student {props.email}</h1>
        </div>
    )
}

export default Student;