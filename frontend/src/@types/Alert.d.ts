interface Alert {
    open: boolean;
    message: string;
    severity: AlertColor | undefined;
}
