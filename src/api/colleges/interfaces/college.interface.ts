import { Document } from 'mongoose';

export interface College extends Document {


    national_rank?: string;
    description?: string;
    size?: string;
    duration?: string;
    bachelor?: string;
    master?: string;
    doctoral?: string;
    cost?: string;
    sat_range?: string;
    Address?: string;
    economics?: string;
    political?: string;
    mathematics?: string;
    biology?: string;
    computer_science?: string;
    medicine?: string;
    psychology?: string;
    cold?: string;
    hot?: string;
    indifferent_weather?: string;
    indifferent_place?: string;
    rural?: string;
    town?: string;
    baseball?: string;
    basketball?: string;
    football?: string;
    indifferent_sport?: string;
    Arts_and_humanity?: string;
    Health_and_medecine?: string;
    Trade_and_personal_services?: string;
    business?: string;
    interdisciplinary_studies?: string;
    science_math_and_technology?: string;
    social_science?: string;
    employee_at_big_company?: string;
    entrepreneur?: string;
    still_unsure?: string;
    researcher?: string;
    internships?: string;
    lectures?: string;
    practical_work?: string;
    small_classes?: string;
    two_years?: string;
    four_years?: string;
    private?: string;
    public?: string;
    big?: string;
    small?: string;
    medium?: string;
    any_selectivity?: string;
    most_selective?: string;
    somehow_selective?: string;
    very_selective?: string;
    image?: string;



}