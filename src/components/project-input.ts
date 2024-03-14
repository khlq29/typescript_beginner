import Cmp from './base-component'
import { Autobind as auto} from '../decorators/autobind'  // we can also assign aliase names
import * as Validation from '../utils/validation' //grouping --> we can call the funsctions using the variable name we gave like 'Validation'
//import { validate } from '../utils/validation.js'
import { projectState } from '../state/project-state'



//ProjectInput class

export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {

    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleInputElement : HTMLInputElement

    constructor() {
        super('project-input', 'app', true, 'user-input')
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement
        this.configure()
    }

    configure() { 
        this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;


        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true,
            // maxLength : 10
        }

         const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        }

         const peopleValidatable: Validation.Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if (
            !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)
        ) {
            alert('Invalid input, please try again!')
            return;
        } else {
            return [enteredTitle , enteredDescription , +enteredPeople]
        }

    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @auto
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        //console.log(this.titleInputElement.value);
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput
            console.log(title, desc, people);
            projectState.addProject(title,desc,people)
            this.clearInputs()
        }
    }
}
