import numpy as np
def medal_tally(df):
    medal_tally = df.drop_duplicates(subset=['Team', 'Year', 'Sport', 'City', 'Medal', 'Event', 'Games', 'NOC'])
    medal_tally = medal_tally.groupby('Region').sum(numeric_only=True)[['Gold', 'Silver', 'Bronze']].sort_values(by='Gold',ascending=False).reset_index()
    medal_tally.loc[:, 'total'] = medal_tally['Gold'] + medal_tally['Silver'] + medal_tally['Bronze']

    return medal_tally

def select_country_and_year(df):
    year = df['Year'].unique()
    year = sorted(year)
    year.insert(0, 'Overall')

    country = np.unique(df['Region'].dropna().values).tolist()
    country.sort()
    country.insert(0, 'Overall')
    return year,country


def sortedbycountry(df,year, country):
    medal_tal = df.drop_duplicates(subset=['Team', 'Year', 'Sport', 'City', 'Medal', 'Event', 'Games', 'NOC'])
    flag = 0
    if year == 'Overall' and country == 'Overall':
        temp = medal_tal
    if year != 'Overall' and country == 'Overall':
        temp = medal_tal[medal_tal['Year'] == year]
    if year == 'Overall' and country != 'Overall':
        flag = 1
        temp = medal_tal[medal_tal['Region'] == country]
    if year != 'Overall' and country != 'Overall':
        temp = medal_tal[(medal_tal['Year'] == year) & (medal_tal['Region'] == country)]
    if flag == 1:
        x = temp.groupby('Year').sum(numeric_only=True)[['Gold', 'Silver', 'Bronze']].sort_values(by='Gold',
                                                                                                  ascending=False).reset_index()
    else:
        x = temp.groupby('Region').sum(numeric_only=True)[['Gold', 'Silver', 'Bronze']].sort_values(by='Gold',
                                                                                                    ascending=False).reset_index()

    x['total'] = x['Gold'] + x['Silver'] + x['Bronze']
    return x



# def most_successful(df,sport):
#     temp = df.dropna(subset=['Medal'])
#     if sport != 'Overall':
#         temp = temp[temp['Sport'] == sport]
#
#     x = temp['Name'].value_counts().reset_index().head(15).merge(df,left_on='index',right_on='Name',how='left')[['index','Name_x','Sport','region']].drop_duplicates('index')
#     x.rename(columns={'index':'Name','Name_x':'Medals'},inplace=True)
#     return x

def most_successful(df, sport):
    temp = df.dropna(subset=['Medal'])
    if sport != 'Overall':
        temp = temp[temp['Sport'] == sport]
    temp = temp.groupby(['Name', 'Sport', 'Region'], as_index=False)['Medal'].count().nlargest(15, 'Medal')
    temp = temp.rename(columns={'Medal': 'Medals'})

    return temp[['Name', 'Medals', 'Sport', 'Region']]



def year_wise_medal_tally(df,country):
    temp = df.dropna(subset=['Medal'])
    temp1 = temp.drop_duplicates(subset=['Team', 'NOC', 'Games', 'Year', 'City', 'Sport', 'Event', 'Medal'])
    temp1 = temp1[temp1['Region'] == country]
    medals_by_year = temp1.groupby('Year')['Medal'].count().reset_index()
    return  medals_by_year


def generate_heatmap(df,country):
    temp = df.dropna(subset=['Medal'])
    temp1 = temp.drop_duplicates(subset=['Team', 'NOC', 'Games', 'Year', 'City', 'Sport', 'Event', 'Medal'])
    temp1 = temp1[temp1['Region'] == country]
    if temp1.empty:
        return None
    else:
        pt = temp1.pivot_table(index='Sport', columns='Year', values='Medal', aggfunc='count')
        return pt

def athlete_w_h(df,sport):
    athlete_df = df.drop_duplicates(subset=['Name', 'Region'])
    athlete_df['Medal'].fillna('No Medal', inplace=True)
    temp = athlete_df[athlete_df['Sport'] == sport]
    return temp

def menvsw(df):
    athlete_df = df.drop_duplicates(subset=['Name', 'Region'])
    men = athlete_df[athlete_df['Sex'] == 'M'].groupby('Year').count()['Name'].reset_index()
    women = athlete_df[athlete_df['Sex'] == 'F'].groupby('Year').count()['Name'].reset_index()
    final = men.merge(women, on='Year')
    final.rename(columns={'Name_x': 'Male', 'Name_y': 'Female'}, inplace=True)
    final.fillna(0, inplace=True)
    return final

def height_weight(df,sport):
    athlete_df = df.drop_duplicates(subset=['Name','Region'])
    athlete_df['Medal'].fillna('No Medal',inplace=True)
    if sport != 'Overall':
        temp = athlete_df[athlete_df['Sport'] == sport]
        return temp
    else:
        return athlete_df