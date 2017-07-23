export default {
    STATE1: {
        name: 'STATE1',
        next: 'STATE2',
        className:'background-state1',
    },
    STATE2: {
        name: 'STATE2',
        next: 'STATE3',
        className:'background-state-2',
    },
    STATE3: {
        name: 'STATE3',
        next: 'STATE1',
        className:'background-state-3'
    }
}
