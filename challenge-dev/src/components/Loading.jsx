const Loading = () => {
    return (
        <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
            <div className='spinner-border' style={{ width: '3.5rem', height: '3.5rem', borderWidth: '0.4rem' }}></div>
            <div>Loading...</div>
        </div>
    )
}

export default Loading