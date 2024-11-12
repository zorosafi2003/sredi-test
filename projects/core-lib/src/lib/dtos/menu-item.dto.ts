export interface MenuItemDto {
    label: string;
    route: string,
    icon: string;
    children: MenuItemDto[];
    isShowChildren:boolean;
}