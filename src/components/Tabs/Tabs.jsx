function Tabs({ children, buttons, ButtonsWraper = 'menu' }) {
    return (
        <>
            <ButtonsWraper>
                {buttons}
            </ButtonsWraper>
            {children}
        </>
    )

}

export default Tabs;