/// <reference path = "base-component.ts"/>
/// <reference path = "../decorators/autobind.ts"/>
/// <reference path = "../state/project-state.ts"/>
/// <reference path = "../models/drag-drop.ts"/>
/// <reference path = "../models/project.ts"/>
namespace App{
    //ProjectList class

export class ProjectList extends Component< HTMLDivElement ,HTMLElement > implements DragTarget {
    assignedProjects: Project[]

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app' , false ,`${type}-projects`)
        this.assignedProjects = []
        this.element.id = `${this.type}-projects`

        this.configure()
        this.renderContent()
    }

    @Autobind
    dragOverHandler(event: DragEvent) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
           event.preventDefault()
            const listEl = this.element.querySelector('ul')!
           listEl.classList.add('droppable') 
        } 
    }

    @Autobind
    dropHandler(event: DragEvent) {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId , this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished )
    }
    
    @Autobind
    dragLeavehandler(event: DragEvent) {
        const listEl = this.element.querySelector('ul')!
        listEl.classList.remove('droppable')
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler)
        this.element.addEventListener('dragleave', this.dragLeavehandler)
        this.element.addEventListener('drop', this.dropHandler)

        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                   return prj.status === ProjectStatus.Active 
                }
                return prj.status === ProjectStatus.Finished
            });
            this.assignedProjects = relevantProjects
            this.renderProject()
        })
    }

    renderContent() {
        const listId = `${this.type}-projects-list`
        this.element.querySelector('ul')!.id = listId
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase()+ ' PROJECTS'
    }

     private renderProject() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement
        listEl.innerHTML =''
        for (const prjItem of this.assignedProjects) {
          new ProjectItem(this.element.querySelector('ul')!.id, prjItem)  
        }
    }
}
}