/* istanbul ignore next */
/**
 * Default values
 */
export default {
    fixtures: [],
    initialValue: '',
    placeholder: 'Search places',
    disabled: false,
    className: '',
    inputClassName: '',
    buttonClassName: 'geolookup__button',
    buttonText: 'Search',
    location: null,
    radius: null,
    bounds: null,
    country: null,
    types: null,
    queryDelay: 250,
    googleMaps: null,
    geocodeProvider: null,
    disableAutoLookup: false,
    onActivateSuggest: () => { /* no-op */ },
    onGeocodeSuggest: () => { /* no-op */ },
    onSuggestsLookup: () => { /* no-op */ },
    onSuggestSelect: () => { /* no-op */ },
    onSuggestResults: () => { /* no-op */ },
    onSuggestNoResults: () => { /* no-op */ },
    onFocus: () => { /* no-op */ },
    onBlur: () => { /* no-op */ },
    onChange: () => { /* no-op */ },
    skipSuggest: () => { /* no-op */ },
    showSuggests: () => { /* no-op */ },
    getSuggestLabel: (suggest) => suggest.description,
    autoActivateFirstSuggest: false,
    style: {
        input: {},
        suggests: {},
        suggestItem: {},
    },
    ignoreTab: false,
    suggestItemLabelRenderer: (suggest) => suggest.label,
};
