export const executeAction = (action?: any): void => {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
};
