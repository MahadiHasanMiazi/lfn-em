import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'autocomplete-dropdown',
  templateUrl: './autocomplete-dropdown.component.html',
  styleUrls: ['./autocomplete-dropdown.component.scss']
})
export class AutocompleteDropdownComponent implements OnInit, OnChanges {

  @Input() name: string = 'auto-complete dropdown';
  @Input() dropdownList: any = [];
  @Input() multiSelect: boolean = false;
  @Input() dataKeyToShow: string = '';
  @Output() selected = new EventEmitter<any>();
  @Input() selectedItems;

  isAcInputFocus: boolean = false;
  autoSuggests: any = [];
  acDDL: boolean = false;
  acDDValue: string = '';
  ddList: any = [];
  itemsSelected: any = [];
  ddWithInitialData = false;
  @ViewChild("inputField", { static: false })
  inputField: ElementRef;
  @ViewChild("acWrapper", { static: false })
  acWrapper: ElementRef;

  @HostListener("document:click", ["$event.target"])
  @HostListener("document:touchstart", ["$event.target"])
  onclick(targetElement) {

    if (this.acWrapper) {
      const clickedStateAcDDL = this.acWrapper.nativeElement.contains(
        targetElement
      );
      if (!clickedStateAcDDL) {
        this.acDDL = false;
        this.ddWithInitialData = false;
        console.log(this.ddList);
      } else {
        this.acDDL = true;
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
    const length = this.dropdownList.length;
    let item;
    if (length > 0) {
      for (const x of this.dropdownList) {
        if (this.dataKeyToShow !== '') {
          item = { ...x, name: x[this.dataKeyToShow], isActive: false, isChecked: false };
          this.ddList.push(item);
        }
        else {
          item = { name: x, isActive: false, isChecked: false };
          this.ddList.push(item);
        }
      }
    }
    else {
      this.ddList = [{ id: 1, name: "test1", isActive: false, isChecked: false }, { id: 2, name: "test2", isActive: false, isChecked: false }];
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.ddList);
    if (changes['selectedItems']) {
      this.itemsSelected = changes['selectedItems'].currentValue;
      this.ddList.map((item) => {
        if (this.itemsSelected.length > 0) {
          for (let x of this.itemsSelected) {
            if (item.name != x) {
              item.isActive = false;
              item.isChecked = false
            }
          }
        }
        else {
          console.log('doing this');
          item.isActive = false;
          item.isChecked = false
        }
      });
      // console.log(this.ddList);
    }
  }

  inputFocus(focusState) {
    this.isAcInputFocus = focusState;
  }

  suggestDdl(value) {
    this.autoSuggests = this.ddList
      .filter(
        (o) =>
          o.name.toLowerCase().startsWith(value.toLowerCase())

      )
      .slice(0, 10);
  }
  arrowkeyLocation = 0;
  showAutoCompleteDD(event: KeyboardEvent, value) {
    if (value != "") {
      this.acDDL = true;
    } else {
      this.autoSuggests = [];
      return;
    }
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up
        this.arrowkeyLocation--;
        if (this.arrowkeyLocation < 0) {
          this.arrowkeyLocation = 0;
        }
        break;
      case 40: // this is the ascii of arrow down
        this.arrowkeyLocation++;
        if (this.autoSuggests.length <= this.arrowkeyLocation) {
          this.arrowkeyLocation = this.autoSuggests.length - 1;
        }
        break;
      case 13:
        this.chooseItem(this.autoSuggests[this.arrowkeyLocation]);
        break;
    }
  }

  showInitialDd() {
    if (this.multiSelect) {
      this.ddWithInitialData = true;
    }
  }

  chooseItem(item) {
    this.ddList.map((o) => {
      if (o.name == item.name) {
        item.isChecked = !item.isChecked;
        item.isActive = !item.isActive;
      }
    });
    let updatedItem;
    if (this.dataKeyToShow) {
      const { name, isActive, isChecked, ...restOfItem } = item;
      updatedItem = restOfItem;
    }
    else {
      updatedItem = item.name;
    }
    if (!this.multiSelect) {
      this.acDDValue = '';
      this.autoSuggests = [];
      this.acDDL = false;
      this.selected.emit(
        updatedItem
      );
    }
    else {
      if (!this.itemsSelected.includes(updatedItem)) {
        this.itemsSelected.push(updatedItem);
        this.selected.emit(this.itemsSelected);
        console.log(this.ddList);
      }
    }

  }
  onItemKeyDown(event, item) {
    if (event.key === "Enter" || event.key === " ") {
      this.chooseItem(item);
    }
  }

}
