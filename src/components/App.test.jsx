import '@testing-library/jest-dom' 
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import App from "./App"

describe('App Component', () => {
    it('Add Participant', () => {
        const { container } = render(
            <App />
        )
        expect(container.querySelector("h5")).toBeDefined()
        expect(container.querySelector("h5")).toHaveTextContent('Add Participant')
        // console.log(screen.getByRole("heading", { level: 5 }))
    })

    it('Shows Participants List when Submit is clicked', async () => {
        const { container } = render(
            <App />
        )
        await userEvent.click(screen.getByText('Submit'))
        expect(container.querySelector("h5")).toBeDefined()
        expect(container.querySelector("h5")).toHaveTextContent('Participants List')
    })
    it('Shows Shopping List when Shopping List button is clicked', async () => {
        const { container } = render(
            <App />
        )
        await userEvent.click(screen.getByText('Shopping List'))
        expect(container.querySelector("h5")).toBeDefined()
        expect(container.querySelector("h5")).toHaveTextContent('Shopping List')
    })
})



