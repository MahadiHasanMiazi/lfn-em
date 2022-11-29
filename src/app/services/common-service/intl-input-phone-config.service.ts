import { Injectable } from '@angular/core';
import { ConfigurationOptions, ContentOptionsEnum, CountryModel, NumberResult, TooltipOptionsEnum } from 'intl-input-phone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntlInputPhoneConfigService {

  SelectedCountryISOCode: BehaviorSubject<string> = new BehaviorSubject("US");
  NumberModel: BehaviorSubject<string> = new BehaviorSubject("xxxxxxxxxx");
  phone = new BehaviorSubject<NumberResult>(new NumberResult());
  isRequired: boolean = false;
  configOption: ConfigurationOptions;

  // countryModel: CountryModel = {
  //   CountryPhoneCode: "+1 ",
  //   FlagCssClass: "flag-us",
  //   ISOCode: "US",
  //   InputMasking: "(999) 999-9999",
  //   IsShowCustomFlag: false,
  //   Name: "United States",
  //   disabled: false,
  //   element: null,
  //   id: "US",
  //   selected: true,
  //   text: "",
  //   title: "US",
  // } as CountryModel;

  constructor() {
    this.configOption = new ConfigurationOptions();
    this.configOption.SelectorClass = "InputValidation1";
    this.configOption.ToolTipText = TooltipOptionsEnum.CountryISOCode;
    this.configOption.OptionTextTypes = [];
    this.configOption.IsShowAllOtherCountry = true;
    this.configOption.OptionTextTypes.push(ContentOptionsEnum.Flag);
    this.configOption.OptionTextTypes.push(ContentOptionsEnum.CountryName);
    this.configOption.OptionTextTypes.push(
      ContentOptionsEnum.CountryPhoneCode
    );
  }

  public onNumberChage(outputResult) {
    this.phone.next(outputResult);
  }

  public requiredFlagChange(isRequired: boolean) {
    this.isRequired = isRequired;
  }

  setValue(number: string, countryISOCode: string) {
    this.SelectedCountryISOCode.next(countryISOCode);
    this.NumberModel.next(number);
  }
}
