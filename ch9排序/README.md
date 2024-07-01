


# 8 桶排序
https://blog.csdn.net/qq_27198345/article/details/126516234


桶排序（bucket sort）是分治策略的一个典型应用。它通过设置一些具有大小顺序的桶，每个桶对应一个数据范围，将数据平均分配到各个桶中；然后，在每个桶内部分别执行排序；最终按照桶的顺序将所有数据合并。

```

import java.util.ArrayList;

/**
 * @author yumu
 * @date 2022/8/25
 */
public class BucketSort {

    public void bucketSort(int[] nums) {
        int n = nums.length;
        int mn = nums[0], mx = nums[0];
        // 找出数组中的最大最小值
        for (int i = 1; i < n; i++) {
            mn = Math.min(mn, nums[i]);
            mx = Math.max(mx, nums[i]);
        }
        int size = (mx - mn) / n + 1; // 每个桶存储数的范围大小，使得数尽量均匀地分布在各个桶中，保证最少存储一个
        int cnt = (mx - mn) / size + 1; // 桶的个数，保证桶的个数至少为1
        List<Integer>[] buckets = new List[cnt]; // 声明cnt个桶
        for (int i = 0; i < cnt; i++) {
            buckets[i] = new ArrayList<>();
        }
        // 扫描一遍数组，将数放进桶里
        for (int i = 0; i < n; i++) {
            int idx = (nums[i] - mn) / size;
            buckets[idx].add(nums[i]);
        }
        // 对各个桶中的数进行排序，这里用库函数快速排序
        for (int i = 0; i < cnt; i++) {
            buckets[i].sort(null); // 默认是按从小打到排序
        }
        // 依次将各个桶中的数据放入返回数组中
        int index = 0;
        for (int i = 0; i < cnt; i++) {
            for (int j = 0; j < buckets[i].size(); j++) {
                nums[index++] = buckets[i].get(j);
            }
        }
    }

    public static void main(String[] args) {
        int[] nums = {19, 27, 35, 43, 31, 22, 54, 66, 78};
        BucketSort bucketSort = new BucketSort();
        bucketSort.bucketSort(nums);
        for (int num: nums) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
 
```