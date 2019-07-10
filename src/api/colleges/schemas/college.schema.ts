import * as mongoose from 'mongoose';
import { Document, Schema, Model, model } from 'mongoose';

export const collegesSchema: Schema = new Schema({


    national_rank: {
        type: 'String'
    },
    description: {
        type: 'String'
    },
    size: {
        type: 'String'
    },
    duration: {
        type: 'String'
    },
    bachelor: {
        type: 'String'
    },
    master: {
        type: 'String'
    },
    doctoral: {
        type: 'String'
    },
    cost: {
        type: 'String'
    },
    sat_range: {
        type: 'String'
    },
    Address: {
        type: 'String'
    },
    economics: {
        type: 'String'
    },
    political: {
        type: 'String'
    },
    mathematics: {
        type: 'String'
    },
    biology: {
        type: 'String'
    },
    computer_science: {
        type: 'String'
    },
    medicine: {
        type: 'String'
    },
    psychology: {
        type: 'String'
    },
    history: {
        type: 'String'
    },
    cold: {
        type: 'String'
    },
    hot: {
        type: 'String'
    },
    indifferent_weather: {
        type: 'String'
    },
    indifferent_place: {
        type: 'String'
    },
    rural: {
        type: 'String'
    },
    town: {
        type: 'String'
    },
    baseball: {
        type: 'String'
    },
    basketball: {
        type: 'String'
    },
    football: {
        type: 'String'
    },
    indifferent_sport: {
        type: 'String'
    },
    Arts_and_humanity: {
        type: 'String'
    },
    Health_and_medecine: {
        type: 'String'
    },
    Trade_and_personal_services: {
        type: 'String'
    },
    business: {
        type: 'String'
    },
    interdisciplinary_studies: {
        type: 'String'
    },
    science_math_and_technology: {
        type: 'String'
    },
    social_science: {
        type: 'String'
    },
    employee_at_big_company: {
        type: 'String'
    },
    entrepreneur: {
        type: 'String'
    },
    go_for_an_adventure: {
        type: 'String'
    },
    researcher: {
        type: 'String'
    },
    still_unsure: {
        type: 'String'
    },
    internships: {
        type: 'String'
    },
    lectures: {
        type: 'String'
    },
    practical_work: {
        type: 'String'
    },
    small_classes: {
        type: 'String'
    },
    two_years: {
        type: 'String'
    },
    four_years: {
        type: 'String'
    },
    private: {
        type: 'String'
    },
    public: {
        type: 'String'
    },
    any_size: {
        type: 'String'
    },
    big: {
        type: 'String'
    },
    medium: {
        type: 'String'
    },
    small: {
        type: 'String'
    },
    any_selectivity: {
        type: 'String'
    },
    most_selective: {
        type: 'String'
    },
    somehow_selective: {
        type: 'String'
    },
    very_selective: {
        type: 'String'
    },
    image: {
        type: 'String'
    }

});
