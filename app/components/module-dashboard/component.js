import Component from '@glimmer/component';

export default class ModuleDashboardComponent extends Component {
    get defaultWidgets() {
        return [
            {id: '1_default', name: '1_default', label: 'Default 1', default: true},
            {id: '2_default', name: '2_default', label: 'Default 2', default: true},
            {id: '3_default', name: '3_default', label: 'Default 3', default: true},
            {id: '4_default', name: '4_default', label: 'Default 4', default: true},
            {id: '5_default', name: '5_default', label: 'Default 5', default: true},
            {id: '6_default', name: '6_default', label: 'Default 6', default: true},
            {id: '7_default', name: '7_default', label: 'Default 7', default: true}
        ]
    }

    get widgets() {
        return [...this.defaultWidgets];
    }
}
