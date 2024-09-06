export function getOrCreateAppWrapper(): HTMLDivElement {
    let appWrapper = document.querySelector<HTMLDivElement>('div#app');

    if (!appWrapper){
        appWrapper = document.createElement('div');
        appWrapper.id = 'app';
        document.body.appendChild(appWrapper);
    }

    return appWrapper;
}
