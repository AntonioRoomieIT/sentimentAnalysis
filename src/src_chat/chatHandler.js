import moment from 'moment';
const buildComponent = (query = ' ', who = 'AGENT') => {
    let agentOrCustomer = who === 'AGENT' ? 'left-msg' : 'right-msg';
    let relativeURL= who==='AGENT'? 'https://icons.veryicon.com/png/o/system/system-background-area-icon/call-center-4.png':'https://icons.veryicon.com/png/o/miscellaneous/customer-service-icon-library/customer-9.png';
    let divMSG = document.createElement('div');
    divMSG.classList.add('msg');
    divMSG.classList.add(agentOrCustomer);
    let divIMG = document.createElement('div');
    divIMG.classList.add('msg-img');
    divIMG.style.backgroundImage = 'url('+relativeURL+')';
    let divBubble = document.createElement('div');
    divBubble.classList.add('msg-bubble');
    let divInfo = document.createElement('div');
    divInfo.classList.add('msg-info');
    let divInfoName = document.createElement('div');
    divInfoName.classList.add('msg-info-name');
    let divInfoTime = document.createElement('div');
    divInfoTime.classList.add('msg-info-time');
    let divText = document.createElement('div');
    divText.classList.add('msg-text');
    let divInfoNameText = document.createTextNode(who);
    let divInfoTimeText = document.createTextNode(moment().format('HH:mm:ss'));
    let divTextText = document.createTextNode(query);
    divText.appendChild(divTextText);
    divInfoTime.appendChild(divInfoTimeText);
    divInfoName.appendChild(divInfoNameText);
    divInfo.appendChild(divInfoName);
    divInfo.appendChild(divInfoTime);
    divBubble.appendChild(divInfo);
    divBubble.appendChild(divText);
    divMSG.appendChild(divIMG);
    divMSG.appendChild(divBubble);
    return divMSG;
};
const buildAgentMSG = (query) => {
    console.log("Push button to agent");
    document.getElementsByClassName("msger")[0].appendChild(buildComponent(query, 'AGENT'));

};
const buildCustomertMSG = (query) => {
    console.log("Push button to customer");
    document.getElementsByClassName("msger")[0].appendChild(buildComponent(query, 'CUSTOMER'));
};
export { buildAgentMSG, buildCustomertMSG };
