//sample code for if you had a button that said "click me" and changed a local state item from 0 to 15.

import { fireEvent, render } from "@testing-library/react"
import { TaskCounter } from "./TaskCounter"

describe("TaskCounter", () => {
    const completedTasks = [
        { id: "123ABC", description: "let's do this", isComplete: true },
    ]

    it("click me button exists", () => {
        // Arrange
        const name = "Click me"

        // Act
        const { getByText } = render(
            <TaskCounter completedTasks={completedTasks} />,
        )
        const received = getByText(name)

        // Assert
        expect(received).toBeDefined()
    })
    it("changes the count to 15 after clicking the button", () => {
        // Arrange
        const name = "Click me"

        // Act
        const { getByText } = render(
            <TaskCounter completedTasks={completedTasks} />,
        )
        const button = getByText(name)
        const countBefore = getByText("Count: 0")
        expect(countBefore).toBeDefined()
        fireEvent.click(button)

        // Assert
        const countAfter = getByText("Count: 15")
        expect(countAfter).toBeDefined()
    })
})
