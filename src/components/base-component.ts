
//Component Base Class

export const something = '...'

export default abstract class Component<T extends HTMLElement, U extends HTMLElement > {
    templateElement: HTMLTemplateElement
    hostElement: T
    element: U

    constructor(
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean, 
        newELementId?: string
    ) {
        this.templateElement = <HTMLTemplateElement> document.getElementById(templateId)!;
        this.hostElement = document.getElementById(hostElementId)! as T

        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as U
        if (newELementId) {
            this.element.id = newELementId
        }
        this.attach(insertAtStart)
    }

    private attach(insertAtBeginning : boolean) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element)
    }

    abstract configure(): void
    abstract renderContent(): void
}
