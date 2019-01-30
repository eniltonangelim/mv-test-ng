export function throwIfAlreadyLoaded(parentMOdule: any, moduleName: string){
    if (parentMOdule) {
        throw new Error(`O AppModule contém uma instância de CoreModule`)
    }
}