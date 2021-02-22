package hk.dubbo.server.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 楼盘表
 * </p>
 *
 * @author evan
 * @since 2021-02-19
 */
@Data
@Accessors(chain = true)
@TableName("tb_estate")
public class Estate extends BasePojo implements Serializable {
    private static final long serialVersionUID = -6608116231344503526L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 楼盘名称
     */
    private String name;

    /**
     * 所在省
     */
    private String province;

    /**
     * 所在市
     */
    private String city;

    /**
     * 所在区
     */
    private String area;

    /**
     * 具体地址
     */
    private String address;

    /**
     * 建筑年代
     */
    private String year;

    /**
     * 建筑类型
     */
    private String type;

    /**
     * 物业费
     */
    private String propertyCost;

    /**
     * 物业公司
     */
    private String propertyCompany;

    /**
     * 开发商
     */
    private String developers;

    // /**
    //  * 创建时间
    //  */
    // private LocalDateTime created;
    //
    // /**
    //  * 更新时间
    //  */
    // private LocalDateTime updated;

    /**
     * 楼盘实体类
     */
    @TableField(exist = false)
    private List<HouseResources> houseResourcesList;


}
