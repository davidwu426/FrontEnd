export class resourceModelArr {
    arr: resourceModel[];
}

export class resourceModel {
    project: proj;
    resource: res;
}

export class proj {
    projectId: number;
    projectName: string;
}
export class res {
    resourceId: number;
    resourceName: string;
    resourceCode: number;
}


// [{"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":16,"resourceName":"Masonary","resourceCode":"10 11 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":15,"resourceName":"Electric","resourceCode":"00 11 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":18,"resourceName":"Heat","resourceCode":"20 21 12"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":3,"resourceName":"cccccc","resourceCode":"7944444444466"}},
// {"proj":{"projectId":11,"projectName":"Projec5"},"res":{"resourceId":17,"resourceName":"Wheat","resourceCode":"20 11 12"}}]