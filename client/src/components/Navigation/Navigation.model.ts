import NavigationItemModel from "./NavigationItem.model";

export default interface NavigationModel {
    title: string;
    items: NavigationItemModel[];
}